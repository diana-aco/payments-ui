
import Search from "./components/Search/Search";
import Transactions from "./components/Transactions/transactions";
import PageHeader from "./components/pageHeader/PageHeader";

function App() {
    return (
        <div>
            <PageHeader/>
            <Search/>
            <Transactions/>
        </div>
    );
}

export default App;
