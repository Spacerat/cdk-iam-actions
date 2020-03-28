export type Entry = {
  ARNFormat: string;
  ARNRegex: string;
  Actions: string[];
  HasResource: boolean;
  StringPrefix: string;
  conditionKeys?: string[];
};

export type ServiceMap = Record<string, Entry>;
