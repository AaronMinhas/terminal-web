import packageJson from '../../package.json';
import themes from '../../themes.json';
import { history } from '../stores/history';
import { theme } from '../stores/theme';

const hostname = window.location.hostname;

type CommandOutput = string | { text?: string; html: string };

const commandDescriptions: Record<string, { desc: string; color: string }> = {
  help: { desc: 'Show this help message.', color: '#d946ef' },
  hostname: { desc: 'Show the current hostname.', color: '#38bdf8' },
  whoami: { desc: 'Show the current user.', color: '#a3e635' },
  date: { desc: 'Show the current date and time.', color: '#facc15' },
  echo: { desc: 'Print text to the terminal.', color: '#f472b6' },
  sudo: { desc: 'Rick Roll!', color: '#f87171' },
  fastfetch: { desc: 'Show portfolio info in a fancy way.', color: '#34d399' },
  clear: { desc: 'Clear the terminal.', color: '#fbbf24' },
  banner: { desc: 'Display the banner.', color: '#60a5fa' },
};

export const commands: Record<string, (args: string[]) => Promise<CommandOutput> | CommandOutput> = {
  help: () => {
    let html = `<div style="font-family: 'JetBrains Mono', monospace;">`;
    html += `<div style="margin-bottom: 8px;">Available commands:</div>`;
    html += `<div style=\"margin-left: 2em;\">`;
    Object.keys(commands).forEach(cmd => {
      const info = commandDescriptions[cmd];
      html += `<div style="margin-bottom: 2px;"><span style="color: ${info?.color || '#fff'}; font-weight: 600; min-width: 90px; display: inline-block;">'${cmd}'</span><span style="color: #A0A0A0; margin-left: 8px;">${info?.desc || ''}</span></div>`;
    });
    return { html };
  },
  hostname: () => hostname,
  whoami: () => 'guest',
  date: () => new Date().toLocaleString(),
  echo: (args: string[]) => args.join(' '),
  sudo: (args: string[]) => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');

    return `Permission denied: unable to run the command '${args[0]}' as root.`;
  },
  fastfetch: () => {
    return {
      html: `
        <div style="display: flex; gap: 24px; margin-bottom: 16px; font-family: 'JetBrains Mono', monospace;">
          <div style="flex-shrink: 0; line-height: 1.1;">
            <div style="color: #e6edf3; white-space: pre;">                     ..'</div>
            <div style="color: #ff6b6b; white-space: pre;">                 ,xNMM.</div>
            <div style="color: #51cf66; white-space: pre;">               .OMMMMo</div>
            <div style="color: #ffd43b; white-space: pre;">               lMM"</div>
            <div style="color: #339af0; white-space: pre;">     .;loddo:.  .olloddol;.</div>
            <div style="color: #e599f7; white-space: pre;">   cKMMMMMMMMMMNWMMMMMMMMMM0:</div>
            <div style="color: #3bc9db; white-space: pre;"> .KMMMMMMMMMMMMMMMMMMMMMMMWd.</div>
            <div style="color: #e6edf3; white-space: pre;"> XMMMMMMMMMMMMMMMMMMMMMMMX.</div>
            <div style="color: #ff6b6b; white-space: pre;">;MMMMMMMMMMMMMMMMMMMMMMMM:</div>
            <div style="color: #51cf66; white-space: pre;">:MMMMMMMMMMMMMMMMMMMMMMMM:</div>
            <div style="color: #ffd43b; white-space: pre;">.MMMMMMMMMMMMMMMMMMMMMMMMX.</div>
            <div style="color: #339af0; white-space: pre;"> kMMMMMMMMMMMMMMMMMMMMMMMMWd.</div>
            <div style="color: #e599f7; white-space: pre;"> 'XMMMMMMMMMMMMMMMMMMMMMMMMMMk</div>
            <div style="color: #3bc9db; white-space: pre;">  'XMMMMMMMMMMMMMMMMMMMMMMMMK.</div>
            <div style="color: #e6edf3; white-space: pre;">   kMMMMMMMMMMMMMMMMMMMMMMd</div>
            <div style="color: #ff6b6b; white-space: pre;">    ;KMMMMMMMWXXWMMMMMMMk.</div>
            <div style="color: #51cf66; white-space: pre;">      "cooc*"    "*coo'"</div>
          </div>
          <div style="flex: 1; line-height: 1.4;">
            <div style="color: #e6edf3; font-weight: 600;">aaron@portfolio</div>
            <div style="color: #A0A0A0; margin-bottom: 4px;">-----------------</div>
            <div style="margin-bottom: 2px;"><span style="color: #FFC799; font-weight: 500; min-width: 80px; display: inline-block;">Role:</span><span style="color: #ffffff;">Software Engineering & Business Student</span></div>
            <div style="margin-bottom: 2px;"><span style="color: #FFC799; font-weight: 500; min-width: 80px; display: inline-block;">Location:</span><span style="color: #ffffff;">Sydney, Australia</span></div>
            <div style="margin-bottom: 2px;"><span style="color: #FFC799; font-weight: 500; min-width: 80px; display: inline-block;">Focus:</span><span style="color: #ffffff;">DevOps Engineering & Cloud Infrastructure</span></div>
            <div style="margin-bottom: 2px;"><span style="color: #FFC799; font-weight: 500; min-width: 80px; display: inline-block;">Learning:</span><span style="color: #ffffff;">CI/CD, Infrastructure as Code, Containerisation</span></div>
            <div style="margin-bottom: 2px;"><span style="color: #FFC799; font-weight: 500; min-width: 80px; display: inline-block;">Education:</span><span style="color: #ffffff;">Macquarie University – Software Engineering & Business</span></div>
            <div style="margin-bottom: 2px;"><span style="color: #FFC799; font-weight: 500; min-width: 80px; display: inline-block;">Languages:</span><span style="color: #ffffff;">Python, Go, Bash, JavaScript, YAML</span></div>
            <div style="margin-bottom: 2px;"><span style="color: #FFC799; font-weight: 500; min-width: 80px; display: inline-block;">Tools:</span><span style="color: #ffffff;">Docker, Jenkins, Ansible, Prometheus, Grafana</span></div>
            <div style="margin-bottom: 2px;"><span style="color: #FFC799; font-weight: 500; min-width: 80px; display: inline-block;">Infrastructure:</span><span style="color: #ffffff;">ESXi, Nginx, Docker Swarm</span></div>
            <div style="margin-bottom: 2px;"><span style="color: #FFC799; font-weight: 500; min-width: 80px; display: inline-block;">Homelab:</span><span style="color: #ffffff;">Self-hosted services, Home Assistant, ESPHome, ESP32 projects</span></div>
            <div style="margin-bottom: 2px;"><span style="color: #FFC799; font-weight: 500; min-width: 80px; display: inline-block;">Interests:</span><span style="color: #ffffff;">IoT automation, Self-hosting, Infrastructure as Code</span></div>
            <div style="margin-bottom: 2px;"><span style="color: #FFC799; font-weight: 500; min-width: 80px; display: inline-block;">Philosophy:</span><span style="color: #ffffff;">Open source advocate (despite typing this on a MacBook)</span></div>
            <div style="margin-bottom: 2px;"><span style="color: #FFC799; font-weight: 500; min-width: 80px; display: inline-block;">Terminal:</span><span style="color: #ffffff;">Ghostty with zsh</span></div>
            <div style="margin-bottom: 2px;"><span style="color: #FFC799; font-weight: 500; min-width: 80px; display: inline-block;">Editor:</span><span style="color: #ffffff;">VS Code with JetBrains Mono</span></div>
            <div style="margin-bottom: 2px;"><span style="color: #FFC799; font-weight: 500; min-width: 80px; display: inline-block;">Theme:</span><span style="color: #ffffff;">Vesper (Dark) – because dark mode is life</span></div>
            <div style="margin-bottom: 2px;"><span style="color: #FFC799; font-weight: 500; min-width: 80px; display: inline-block;">Portfolio:</span><span style="color: #ffffff;">Built with love using HTML, CSS & JavaScript</span></div>
          </div>
        </div>
        <div style="display: flex; gap: 4px; margin: 16px 0; flex-wrap: wrap;">
          <span style="width: 16px; height: 16px; border-radius: 2px; display: block; background-color: #ff6b6b;"></span>
          <span style="width: 16px; height: 16px; border-radius: 2px; display: block; background-color: #4ecdc4;"></span>
          <span style="width: 16px; height: 16px; border-radius: 2px; display: block; background-color: #45b7d1;"></span>
          <span style="width: 16px; height: 16px; border-radius: 2px; display: block; background-color: #f9ca24;"></span>
          <span style="width: 16px; height: 16px; border-radius: 2px; display: block; background-color: #f0932b;"></span>
          <span style="width: 16px; height: 16px; border-radius: 2px; display: block; background-color: #eb4d4b;"></span>
          <span style="width: 16px; height: 16px; border-radius: 2px; display: block; background-color: #6c5ce7;"></span>
          <span style="width: 16px; height: 16px; border-radius: 2px; display: block; background-color: #a29bfe;"></span>
          <span style="width: 16px; height: 16px; border-radius: 2px; display: block; background-color: #fd79a8;"></span>
          <span style="width: 16px; height: 16px; border-radius: 2px; display: block; background-color: #fdcb6e;"></span>
          <span style="width: 16px; height: 16px; border-radius: 2px; display: block; background-color: #e17055;"></span>
          <span style="width: 16px; height: 16px; border-radius: 2px; display: block; background-color: #81ecec;"></span>
          <span style="width: 16px; height: 16px; border-radius: 2px; display: block; background-color: #74b9ff;"></span>
          <span style="width: 16px; height: 16px; border-radius: 2px; display: block; background-color: #55a3ff;"></span>
          <span style="width: 16px; height: 16px; border-radius: 2px; display: block; background-color: #00b894;"></span>
          <span style="width: 16px; height: 16px; border-radius: 2px; display: block; background-color: #00cec9;"></span>
        </div>
      `
    };
  },
  // theme: (args: string[]) => {
  //   const usage = `Usage: theme [args].
  //   [args]:
  //     ls: list all available themes
  //     set: set theme to [theme]

  //   [Examples]:
  //     theme ls
  //     theme set gruvboxdark
  //   `;
  //   if (args.length === 0) {
  //     return usage;
  //   }

  //   switch (args[0]) {
  //     case 'ls': {
  //       let result = themes.map((t) => t.name.toLowerCase()).join(', ');
  //       result += `You can preview all these themes here: ${packageJson.repository.url}/tree/master/docs/themes`;

  //       return result;
  //     }

  //     case 'set': {
  //       if (args.length !== 2) {
  //         return usage;
  //       }

  //       const selectedTheme = args[1];
  //       const t = themes.find((t) => t.name.toLowerCase() === selectedTheme);

  //       if (!t) {
  //         return `Theme '${selectedTheme}' not found. Try 'theme ls' to see all available themes.`;
  //       }

  //       theme.set(t);

  //       return `Theme set to ${selectedTheme}`;
  //     }

  //     default: {
  //       return usage;
  //     }
  //   }
  // },
  // repo: () => {
  //   window.open(packageJson.repository.url, '_blank');

  //   return 'Opening repository...';
  // },
  clear: () => {
    history.set([]);

    return '';
  },
  // email: () => {
  //   window.open(`mailto:${packageJson.author.email}`);

  //   return `Opening mailto:${packageJson.author.email}...`;
  // },
  // donate: () => {
  //   window.open(packageJson.funding.url, '_blank');

  //   return 'Opening donation url...';
  // },
  // weather: async (args: string[]) => {
  //   const city = args.join('+');

  //   if (!city) {
  //     return 'Usage: weather [city]. Example: weather Brussels';
  //   }

  //   const weather = await fetch(`https://wttr.in/${city}?ATm`);

  //   return weather.text();
  // },
  // exit: () => {
  //   return 'Please close the tab to exit.';
  // },
  // curl: async (args: string[]) => {
  //   if (args.length === 0) {
  //     return 'curl: no URL provided';
  //   }

  //   const url = args[0];

  //   try {
  //     const response = await fetch(url);
  //     const data = await response.text();

  //     return data;
  //   } catch (error) {
  //     return `curl: could not fetch URL ${url}. Details: ${error}`;
  //   }
  // },
  banner: () => `
 █████╗  █████╗ ██████╗  ██████╗ ███╗   ██╗████████╗ ██████╗
██╔══██╗██╔══██╗██╔══██╗██╔═══██╗████╗  ██║╚══██╔══╝██╔════╝
███████║███████║██████╔╝██║   ██║██╔██╗ ██║   ██║   ██║     
██╔══██║██╔══██║██╔══██╗██║   ██║██║╚██╗██║   ██║   ██║     
██║  ██║██║  ██║██║  ██║╚██████╔╝██║ ╚████║   ██║   ╚██████╗
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝    ╚═════╝

Welcome to Aaron's Portfolio!
Type 'help' to see list of available commands.
`,
};
