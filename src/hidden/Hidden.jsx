import CardForm from "./CardForm"

const Hidden = () => {
  return (
    <div>
      <h1 id='heading' className="section-heading text-center" style={{ opacity: 1 }}>
        Card
      </h1>
      <div className="mt-40">
        <CardForm />
      </div>
    </div>
    
  )
}

export default Hidden