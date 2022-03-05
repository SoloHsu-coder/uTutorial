const Series =(props)=>{
  //console.log(props)
  const{img,title,author} = props;
  const clickHandler=(e)=>{
    console.log(e)
  }
  return(
    <section className='book' onMouseOver ={()=>console.log(author)}>
      <img src ={img}width = "100%" alt ="best selling book" onClick = {clickHandler}/>
      <h3 onClick={()=>console.log(title)}>{title}</h3>
      <h4> {author}</h4>
      
    </section>
)
}

export default Series;