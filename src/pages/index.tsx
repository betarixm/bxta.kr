import * as React from "react";
import { Card, CardList, Category, Entry, Experience } from "../components/resume";
import {
    Experience as ExperienceData,
    Ctfs,
    Experiences,
    Awards,
    Educations,
    Contacts,
} from "../contents/resume";

import * as styles from "../styles/index.module.scss";

interface IndexPageProps {}

interface IndexPageState {}

class IndexPage extends React.Component<IndexPageProps, IndexPageState> {
    render = () => {
        const renderExperience = (exp: ExperienceData[]) =>
            exp.map((x) => (
                <Experience title={x.title} role={x.role} period={x.period}>
                    {x.entries.map((e) => (
                        <Entry title={e.title} tags={e.tags}>
                            {e.content}
                        </Entry>
                    ))}
                </Experience>
            ));

        return (
            <div className={styles.wrapper}>
                <header className={styles.title}>
                    <div className={styles.container}>
                        <div className={styles.inner}>
                            <h1>Gwon Minjae</h1>
                        </div>
                    </div>
                </header>
                <main className={styles.content}>
                    <div className={styles.container}>
                        <div className={styles.inner}>
                            <div className={styles.colMain}>
                                <Category title={"Experiences"}>
                                    {renderExperience(Experiences)}
                                </Category>
                                <Category title={"Certifications & Awards"}>
                                    {renderExperience(Awards)}
                                </Category>
                                <Category title={"CTFs"}>
                                    <CardList>
                                        {Ctfs.map((c) => (
                                            <Card title={c.title}>
                                                {c.rank} {c.team}
                                            </Card>
                                        ))}
                                    </CardList>
                                </Category>
                            </div>
                            <div className={styles.colSub}>
                                <Category title={"Education"}>
                                    {renderExperience(Educations)}
                                </Category>
                                <Category title={"Contact"}>
                                    <main
                                        style={{
                                            gridGap: "0.5rem",
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        {Contacts.map((c) => (
                                            <section>
                                                {c.indicator} {c.content}
                                            </section>
                                        ))}
                                    </main>
                                </Category>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    };
}

export default IndexPage;
