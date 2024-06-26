'use client'

const Password = ()=>{
  const randomString = Math.random().toString(36).substring(2, 12)
  return <p className="text-black text-xl">{`${randomString}${randomString}`}</p>
}
export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex items-center flex-col bg-red-500 p-40 rounded-2xl gap-3"> 
        <h1 className="text-2xl">Your random Password is:</h1>
        <Password/>
      </div>
    </div>
  );
}
