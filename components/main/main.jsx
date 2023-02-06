import Link from 'next/link';
import Type from '@/components/type/type';
import jobs from '@/data/jobs';
import skills from '@/data/skills';

export default function Main({ type, speed }) {
    const curentYear = new Date().getFullYear();

    return (
        <main>
            {/* Left */}
            <section className='left'>
                <div id="experience">
                    <div className="comment">{'// Experience'}</div>
                    {
                        jobs.map(({ title, company, location, start, end, lines }, index) => {
                            return (
                                <div key={index} className="job">
                                    <div className="title">
                                        {type ? <Type content={title} speed={speed / 2} /> : <span>{title}</span>}
                                        <span> </span>
                                        {type ? <Type content={`@ ${company}`} speed={speed / 2} className='company' /> : <span className="company">@ {company}</span>}
                                    </div>
                                    <div className="date">
                                        {
                                            type ?
                                                <>
                                                    <Type content={`${start} - ${end} `} speed={speed / 2} />
                                                    <Type content={'| '} speed={speed} className='gray' />
                                                    <Type content={location} speed={speed / 2} className='gray' />
                                                    <span></span>
                                                </> :
                                                <>
                                                    {start} - {end} | {location}
                                                </>
                                        }
                                    </div>
                                    <div className='lines'>
                                        {lines.map((line, index) => {
                                            return (
                                                <span key={index} className="line">
                                                    {/* <span style={{ marginRight: '6px' }} >ᐅ</span> */}
                                                    <span style={{ marginRight: '6px' }} >❯</span>
                                                    {
                                                        type ?
                                                            <>
                                                                <Type content={line} speed={speed / 6} />
                                                            </> :
                                                            <>
                                                                <span dangerouslySetInnerHTML={{ __html: line }} />
                                                            </>
                                                    }
                                                </span>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            {/* Right */}
            <section className="right">
                <div id="skills">
                    <div className="comment">{'// Skills'}</div>
                    {
                        skills.map(({ name, started }, index) => {
                            const years = (curentYear - started || 1);

                            return (
                                <div key={index} className="skill">
                                    <span className="name">
                                        {type ? <Type content={name} speed={speed} /> : name}
                                    </span>
                                    <span className="years">
                                        {
                                            type ?
                                                <Type content={`${years} ${parseInt(years) === 1 ? 'year' : 'years'}`} speed={speed} /> :
                                                <>
                                                    {years} {parseInt(years) === 1 ? 'year' : 'years'}
                                                </>
                                        }
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
                {/* Education */}
                <div id="education">
                    <div className="comment">{'// Education'}</div>
                    <div className="college">
                        <a href="https://www.georgiasouthern.edu/campuses/armstrong-campus/" target="_blank" rel="noreferrer">
                            <Type content="Armstrong Atlantic State University" speed={speed / 2} />
                        </a>
                    </div>
                    <div className="major">
                        {
                            type ?
                                <>
                                    <Type content="2006 - 2007 " speed={speed} className="blue" />
                                    <Type content={'| '} speed={speed} className="light" />
                                    <Type content="Computer Science" speed={speed} className="light" />
                                    <span></span>
                                </>
                                :
                                <>
                                    <span>2006 - 2007</span>
                                    <span> | Computer Science</span>
                                </>
                        }
                    </div>
                </div>
                {/* Contact */}
                <div id="contact">
                    <div className="comment">{'// Contact'}</div>
                    <div className="info">
                        <div>
                            <Link href="tel:9124922522" aria-label="My phone number">
                                <Type content="📱 (912) 492-2522" speed={speed * 2 / 3} startAtChar={2} />
                            </Link>
                        </div>
                        <div>
                            <Link href="mailto:stephen.a.matheis@gmail.com" aria-label="My email address">
                                <Type content="📧 stephen.a.matheis@gmail.com" speed={speed / 2} startAtChar={2} />
                            </Link>
                        </div>
                        <div>
                            <Link href="https://github.com/stephenmatheis" target="_blank" rel="noreferrer" title='GitHub' aria-label="My GitHub profile">
                                <Type content="👩‍💻 github.com/stephenmatheis" speed={speed / 2} startAtChar={5} />
                            </Link>
                        </div>
                        <div>
                            <Link href="https://www.linkedin.com/in/stephenmatheis/" target="_blank" rel="noreferrer" title='LinkedIn' aria-label="My LinkedIn profile">
                                <Type content="💼 linkedin.com/in/stephenmatheis" speed={speed / 2} startAtChar={2} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}