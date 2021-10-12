const styles = {
  container: 'flex justify-center items-center text-center w-28 h-40 m-auto',
  dot: 'bg-green-brand rounded-md w-3 h-3 mr-1 animate-wave'
}

export const Loader: React.FC = () => {
  const p = 0.75

  return (
    <div className={styles.container}>
      {[0, -1.1, -0.9].map(n => (
        <span
          className={styles.dot}
          style={{ animationDelay: `calc(${n}s * ${p})` }}
          key={n}
        ></span>
      ))}
    </div>
  )
}
