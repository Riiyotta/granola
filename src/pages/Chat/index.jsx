import S01AiChatThat from './S01AiChatThat.jsx'
import S02AskAway from './S02AskAway.jsx'

export default function ChatPage() {
  return (
    <main className="flex-1 w-full lg:mx-auto">
      <div className="flex flex-col items-center w-full py-0 text-primary overflow-x-hidden">
        <S01AiChatThat />
        <S02AskAway />
      </div>
    </main>
  )
}
