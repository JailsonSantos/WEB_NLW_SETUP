interface ProgressBarProps {
  progress: number
}

export function ProgressBar(props: ProgressBarProps) {

  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        role="progressbar"
        aria-valuenow={props.progress}
        style={{ width: `${props.progress}%` }}
        className="h-3 rounded-xl bg-violet-600"
        aria-label="Progresso de hábitos completados neste dia"
      />
    </div>
  )
}