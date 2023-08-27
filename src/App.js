import Person from "./Components/Person";
import Button from "./Components/Button";
import Header from "./Components/Header";
import List from "./Components/List";
function App(){
   
    return (
        <>
        <Header title={'hela is greeting words in geremy'}></Header>
        <Person name={'Sanjh'} age={'23'}></Person>
        <Button text={'click'} click={()=>alert("hello")}></Button>
        <List item1={"Mango"} items={['ram','shyam','sanjh']}></List>
        </>
    );
}

export default App;