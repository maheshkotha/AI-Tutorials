export const Button = (label = "button") => {
  const button = document.createElement('button');
  button.textContent = label;
  return button;
}