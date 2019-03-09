import React, { Component } from 'react'

// export default class componentName extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

let D=({match})=>{
    return(
        <div>
            {/* D页 */}
            {match ? 'D页面':'000'}
        </div>
    )
}
export default D