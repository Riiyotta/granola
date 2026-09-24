import S01TurnMeetingNotes from './S01TurnMeetingNotes.jsx'
import S02SecurityAndCompliance from './S02SecurityAndCompliance.jsx'

export default function EnterprisePage() {
  return (
    <main className="flex-1 w-full lg:mx-auto">
      <div className="w-full">
        <S01TurnMeetingNotes />
        <S02SecurityAndCompliance />
      </div>
    </main>
  )
}
