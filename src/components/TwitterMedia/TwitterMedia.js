
import styles from './TwitterMedia.module.css'
function isImage(url) {
    if (url != null) {
        
        if (url.includes('.jpg') || url.includes('.png')) {
            return true
        } else {
            return false
        }
    }
}

export default function TwitterMedia(props) {
    
    return (
        <div>
            { isImage(props.twMedia) ?
                    
                (<img
                    onClick={() => {
                        props.redirectTo(props.twMedia)
                    }}
                    className={styles.twMedia}
                    src={props.twMedia} >
                </img>)
                :
                (<video
                    playsInline
                    controls="true"
                    className={styles.twMedia}
                    src={props.twMedia}
                />
                    
                )
            }
        </div>
    )
}