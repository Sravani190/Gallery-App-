// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, clickImageItem, selectedImageId} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const onClickImage = () => {
    clickImageItem(id)
  }

  const selectImage =
    id === selectedImageId ? 'selected-list-item' : 'list-item'
  return (
    <li>
      <button className={selectImage} type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onClickImage}
          // className="images"
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
