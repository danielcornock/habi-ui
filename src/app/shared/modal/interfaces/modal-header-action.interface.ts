export interface ModalHeaderAction {
  label: string;
  action(): void | Promise<void>;
}
