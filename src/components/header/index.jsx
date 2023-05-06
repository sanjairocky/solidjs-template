import { Show } from "solid-js";
import { useApp } from "../../context/AppContext";

const Header = () => {
  const [state] = useApp();
  return (
    <Show when={state.header}>
      <header>header</header>
    </Show>
  );
};

export default Header;
