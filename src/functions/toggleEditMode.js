export default function enableEditMode(e) {
  console.log(e);
  const element = e.target;
  const text = element.textContent;
  const input = document.createElement('input');
  input.textContent = text;
  // document.insertBefore(input, element);
  element.remove();
}
