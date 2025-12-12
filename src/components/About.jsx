import React from 'react'
import Navbar from "./Navbar";
import Footer from './Footer';

const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]
const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]

export default function Example() {
  return (
    <>
    <Navbar/>
    <div className="relative top-20 isolate mb-20 overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">About Factify</h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            Factify is an innovative IT news platform where every individual has a voice and can contribute to the
            tech community by sharing the latest news and updates.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}


// const About = () => {
//   return (
//     <>
//     <Navbar />
//     {/* <div class="flex w-full flex-col items-center">
//   <div class="my-4 py-2 text-2xl font-bold text-[#243549]">ABOUT FACTIFY</div>
//   <div class="w-4xl px-7 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, dolorum numquam corporis, tenetur quibusdam voluptatum nostrum molestias quam accusamus culpa aspernatur quisquam possimus error porro quaerat magni alias vero reprehenderit Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veritatis aut eum illum nostrum assumenda, tempora consectetur harum laudantium velit nemo incidunt earum quidem optio, eos laborum impedit consequatur aliquam. Voluptas placeat sapiente nisi quae suscipit voluptates labore, obcaecati dolores sint impedit quas est ad iure fuga amet, provident saepe corrupti esse deleniti iste. Corporis, corrupti? Sit voluptatem quis distinctio. Aspernatur dolore eveniet nesciunt eum cupiditate, natus tenetur quia beatae dicta omnis incidunt dolores temporibus architecto debitis minima dolor reprehenderit. Excepturi, non voluptate sequi neque nulla magnam ducimus a beatae! Velit nulla sunt sint in doloribus modi iure commodi a odit, esse aliquid atque rem. Minima deserunt ipsum ex aliquam laborum alias mollitia veritatis, molestiae, consectetur ipsam dolor illum cum. Amet modi culpa fugiat, incidunt temporibus veniam? Minima, consequuntur. Fuga optio accusantium rerum, ea expedita quidem! Minima porro dolores molestias exercitationem aliquid, numquam facilis accusantium incidunt vero fuga, tempore debitis? Fugiat non necessitatibus consequuntur facilis aut, minima odit veritatis placeat hic modi eaque cumque, excepturi, enim minus itaque iusto! Autem, tenetur alias! Neque consequatur laboriosam, at animi deleniti iure harum. Maxime recusandae saepe ipsa excepturi deleniti commodi reprehenderit repellendus quam. Esse fugit totam non provident voluptatem quis voluptas nulla rem optio unde? Totam soluta incidunt iste ratione deserunt eum neque! Molestiae accusantium aperiam, et consectetur doloremque voluptatem neque quas facere! Aut dicta aliquid esse sunt. Officia quas, aliquid odio similique quibusdam illo commodi quis nulla blanditiis? Qui cupiditate ullam placeat. Et repellat dolores aliquam natus sint sapiente non eum, dicta, libero hic ducimus sed distinctio nisi id deleniti obcaecati ipsam fuga amet eius laudantium corrupti porro cupiditate iste placeat! Quidem! Quas repudiandae qui, cupiditate ut nulla earum deleniti sequi nesciunt mollitia aperiam debitis facilis delectus placeat eius magni ad ipsa veritatis esse maxime in aut distinctio, blanditiis velit dignissimos! Deleniti?</div>
// </div> */}

//     </>
//   )
// }

// export default About