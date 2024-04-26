/* eslint-disable react/prop-types */
function Card(props){
  return(
    <div className="card">
      <div className="top-card">
        {<img src={props.imagem} alt={props.altImg} />}
       <h2>{props.nome}</h2>
      </div>
      <div className="body-card">
        <p>{props.conteudo}</p>
      </div>
    </div>
  )
}

export default Card