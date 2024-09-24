export function CardA(props) {
    console.log(props)
return (
<div className="card">
    <h2 className="name">{props.name}</h2>
    <div className="body">
      <div className="label">Age:</div>
      <div>{props.age}</div>
      <div className="label">Phone:</div>
      <div>{props.phone}</div>
      <div className="label">Address:</div>
      <div>{props.address}</div>
    </div>
  </div>)
}

export function Card({name, age, phone, address}) {
return (
<div className="card">
    <h2 className="name">{name}</h2>
    <div className="body">
      <div className="label">Age:</div>
      <div>{age}</div>
      <div className="label">Phone:</div>
      <div>{phone}</div>
      <div className="label">Address:</div>
      <div>{address}</div>
    </div>
  </div>)
}
