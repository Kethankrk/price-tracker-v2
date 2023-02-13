import Navbar from "./Navbar";

export default function(){

    return(
        <>
        <Navbar/>
        <section className="container">
            <div className="first-div">
                <h1 className="my-income">My Income</h1>
                <div className="from-income">
                    <div className="income-name">
                        <p className="source">SOURCE</p>
                        <p className="job">JOB INCOME</p>
                    </div>
                    <div className="job-income-balance">
                        <p className="job-income-balance-amount">$18,560</p>
                        <p className="balance-head">BALANCE</p>
                    </div>
                </div>
                <div className="from-investment">
                    <div className="investment-name">
                        <p className="source">SOURCE</p>
                        <p className="job">INVESTMENT INCOME</p>
                    </div>
                    <div className="job-investment-balance">
                        <p className="job-income-balance-amount">$18,560</p>
                        <p className="balance-head">BALANCE</p>
                    </div>
                </div>
                <button className="my-profile-btn">Manage Income</button>
            </div>
            <div className="second-div">
                <div className="stats-head">
                    <select  id="" className="dashboard-select">
                        <option className="option" value="">LAST WEEK</option>
                        <option className="option" value="">LAST MONTH</option>
                        <option className="option" value="">LAST YEAR</option>
                    </select>
                </div>
            </div>
        </section>
        </>
    )
}