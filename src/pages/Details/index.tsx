import { ExternalLink } from '@/components/ExternalLink'
import { usePosts } from '@/contexts/Posts'
import { StyledPageCardFooter } from '@/styles/components/PageCard'
import { formatDistanceToNowPtBr } from '@/utils/dateFormat'
import { useEffect, useMemo } from 'react'
import { FaCalendar, FaChevronLeft, FaComment, FaGithub } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'

import * as S from './styles'

export const Details = () => {
  const { id } = useParams()
  const { posts, loading } = usePosts()
  const navigate = useNavigate()

  const post = useMemo(() => posts.find(p => p.id.toString() === id), [posts, id])

  useEffect(() => {
    if (!post && !loading) {
      navigate(-1)
    }
  }, [post, navigate, loading])
  
  if (!post) return <></>

  return (
    <>
      <S.HeaderCard>
        <header>
          <S.GoBack onClick={() => navigate(-1)}>
            <FaChevronLeft size={12} />
            <span>Voltar</span>
          </S.GoBack>

          <ExternalLink url={post.html_url}>
            Ver no Github
          </ExternalLink>
        </header>

        <h1>{post.title}</h1>

        <StyledPageCardFooter>
          <span><FaGithub size={18} />{post.user.login}</span>
          <span><FaCalendar size={18} />{formatDistanceToNowPtBr(new Date(post.created_at))}</span>
          <span><FaComment size={18} />{post.comments} {post.comments === 1 ? 'comentário' : 'comentários'}</span>
        </StyledPageCardFooter>
      </S.HeaderCard>

      <S.MarkdownWrapper
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')

            return !inline && match ? (
              <SyntaxHighlighter
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                style={dracula as any}
                PreTag="div"
                language={match[1]}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any, react/prop-types
                ref={props.ref as any}
                {...props}
              >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
            ) : (
              <code className={className ? className : ''} {...props}>
                {children}
              </code>
            )
          }
        }}
      >{post.body}</S.MarkdownWrapper>
    </>
  )
}
