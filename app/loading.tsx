export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-600 mb-4"></div>
        <p className="text-gray-700 dark:text-gray-300 text-lg">Loading...</p>
      </div>
    </div>
  )
}
