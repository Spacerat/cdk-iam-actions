export type Entry = {
  Actions: string[];
  HasResource: boolean;
  StringPrefix: string;
  ARNFormat?: string;
  ARNRegex?: string;
  conditionKeys?: string[];
};

export type ServiceMap = Record<string, Entry>;
