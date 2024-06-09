import Button from "./components/Button.tsx";
function App() {
  return (
      <main>
            <p>
                <Button el={"button"}>A Button</Button>
            </p>
            <p>
                <Button el={"anchor"} href = 'https://google.com'>A link</Button>
            </p>
      </main>
  );
}

export default App;
