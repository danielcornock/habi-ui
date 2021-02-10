export interface HeaderAction {
  icon: string;
  action: () => void | Promise<void>;
}

export interface CoreState {
  headerAction: HeaderAction | undefined;
}
