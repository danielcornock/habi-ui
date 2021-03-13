export type ModalHeaderAction =
  | ModalHeaderActionWithLabel
  | ModalHeaderActionWithIcon;

export interface ModalHeaderActionWithLabel {
  label: string;
  action(): void | Promise<void>;
}

export interface ModalHeaderActionWithIcon {
  icon: string;
  action(): void | Promise<void>;
}
