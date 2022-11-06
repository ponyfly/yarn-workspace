import { concat } from 'lodash-es'
import stoneBar from 'stone-bar'
console.log(concat([1], [3]))
export default () => {
  console.log(stoneBar())
  return concat([1], [3])
}
