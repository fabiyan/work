import React, { Component } from 'react'

// export default class componentName extends Component {
//   render() {
//     return (
//       <div>
//         A页
//       </div>
//     )
//   }
// }

// let A=(obj)=>{
//     console.log(obj)
//     return(
//         <div>
//             A页{obj.match.params.num}
//         </div>
//     )
// }
// export default A

let A=({match})=>{
    console.log(match)
    return(
        <div>
            A页{match.params.num}
        </div>
    )
}
export default A
