import Oven from "./Oven"
import Sink from "./Sink"

function Kitchen() {
  return(
    <>
      <div>
        <h3>Kitchen</h3>
        <div>
          <Oven />
        </div>
        <div>
          <Sink />
        </div>
      </div>
    </>
  )
}

export default Kitchen