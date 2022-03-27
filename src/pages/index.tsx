import * as React from "react";
import { Card, Category, Entry, Experience } from "../components/resume";
import {
    Experience as ExperienceData,
    Ctfs,
    Experiences,
    Awards,
    Educations,
    Contacts,
} from "../contents/resume";

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
            <>
                <header>
                    <h1>Gwon Minjae</h1>
                </header>
                <main>
                    <Category title={"Experiences"}>{renderExperience(Experiences)}</Category>
                    <Category title={"Certifications & Awards"}>
                        {renderExperience(Awards)}
                    </Category>
                    <Category title={"CTFs"}>
                        {Ctfs.map((c) => (
                            <Card title={c.title}>
                                {c.rank} {c.team}
                            </Card>
                        ))}
                    </Category>
                    <Category title={"Contact"}>
                        {Contacts.map((c) => (
                            <section>
                                {c.indicator} {c.content}
                            </section>
                        ))}
                    </Category>
                    <Category title={"Education"}>{renderExperience(Educations)}</Category>
                </main>
            </>
        );
    };
}

export default IndexPage;
