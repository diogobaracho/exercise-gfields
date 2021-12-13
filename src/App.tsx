import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Fields } from "./components/Fields"
import { Header } from "./components/Headers"
import { GlobalStyle } from "./styles/global"
import { Field } from "./components/Field"

function App() {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Header />
                <main>
                    <section>
                        <Switch>
                            <Route exact path="/">
                                <Fields />
                            </Route>
                            <Route path="/fields/:id">
                                <Field />
                            </Route>
                        </Switch>
                    </section>
                </main>
            </Router>
        </>
    )
}

export default App
