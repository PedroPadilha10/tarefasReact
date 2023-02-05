import React, {createContext} from 'react';

// 4 - importalçao de componentes 
import FirstComponent from './componetes/FirstComponent';


//5 - destruturando props 
import SecondComponets from './componetes/SecondComponets';
import Destructuring  from './componetes/Destructuring';

// 6 - useStates
import State from './componetes/State';

// 10 - utilizando contexto 
import Context from './componetes/Context';

// 8 - type
type textOrNull = string | null 

type fixed = "Isso" | "Ou" | "Aquilo";

// 9 - context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null)



function App() {

  // 1 - variaveis
  const name: string = "Pedro";
  const age: number = 30
  const isWorking: boolean = true;

  // 2 - funcoes

  const userGreeting = (name: string): string => {
    return `olá, ${name}`
  }

  // 8 - type 

  const myText:textOrNull = "Tem algum texto aqui";
  let mySecondText:textOrNull = null;

  // mySecondText = "Opa";

  const textandoFixed:fixed = "Isso";

  // 9 - context

  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  }


  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <h1>Typescript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (<p>Está trabalhando!</p>
      )}
      
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponets name="Segundo" 
      />
      <Destructuring 
      title="Primeiro post" 
      content="Algum conteudo" 
      commenstQty={10} 
      tags={["ts", "js"]}
      />
      <State /> 
      {myText && 
        <p>Tem texto na variavel</p>
      }
      {mySecondText && 
        <p>Tem um texto na variavel</p>
      }
      <Context />
    </div>
    </AppContext.Provider>
  );
}

export default App;
