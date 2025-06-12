export interface Command {
  command: string;
  outputs: string[];
  htmlOutputs?: string[]; // Optional HTML outputs for rich content
}
