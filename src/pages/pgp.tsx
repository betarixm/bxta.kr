import React from "react";
import Layout from "../components/Layout";
import { Pgp as PgpPublicKey } from "../contents/resume";

interface PubProps {}

interface PubState {}

class Pgp extends React.Component<PubProps, PubState> {
    render = () => {
        return (
            <Layout title={"PGP Public Key"}>
                <pre style={{ fontFamily: "monospace" }}>{PgpPublicKey}</pre>
            </Layout>
        );
    };
}

export default Pgp;
