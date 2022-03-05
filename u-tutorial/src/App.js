import './App.css';
import uniqid from 'uniqid';
import {seriess} from './seriess';
import Series from './Series';
function App() {
  return (
    <section className="booklist">
      {seriess.map((serie) =>{
        return <Series key={uniqid()} {...serie}/> // bookss={book} ဆို bookss obj 3ခုဝင်သွားမယ် props အနေနဲ့လက်ခံမယ်ဆိုရင်props.bookssနဲ့သုံးပြီးမှ destructureလုပ်
                                        //spread operator သုံးမယ်ဆိုရင်တော့ props တစ်ခုတည်းနဲ့ရ
    })}
 
    </section>
  );
}




export default App;
