import { Show } from "solid-js";
import { useApp } from "../../context/AppContext";

const Footer = () => {
  const [state] = useApp();
  return (
    <Show when={state.footer}>
      <footer>footer</footer>
    </Show>
  );
};

export default Footer;
