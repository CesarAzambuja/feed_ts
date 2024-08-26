import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'
import { Avatar } from './Avatar';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    function HandleDeteleComment() {
        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar
                src="https://avatars.githubusercontent.com/u/62890582?v=4"
                hasBorder={false}
                alt='' />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>César Azambuja</strong>
                            <time title='11 de Agosto de 2024' dateTime="2024-008-03 08:13:00">Cerca de 1h atrás.</time>
                        </div>
                        <button onClick={HandleDeteleComment} title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>

                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>22</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}