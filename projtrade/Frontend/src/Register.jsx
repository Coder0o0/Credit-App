export default function Register()
{
    return (
        <div className="flex flex-col items-center justify-center h-screen p-32 bg-black bg-opacity-50">
            <div className="bg-white w-auto border-2 flex flex-col border-green-400 ">
            <h1 className="text-3xl flex font-bold mb-5 mt-5 justify-center items-center">APPLY FOR A LOAN</h1>
            <form className="bg-white p-6 rounded flex ml-12">
                <div className="mr-12">
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="fullName">
                            Full name as it appears on bank account
                        </label>
                        <input
                            className="border border-green-400 rounded w-64 p-2 mt-1"
                            type="text"
                            id="fullName"
                            placeholder="Full name as it appears on bank account"
                        />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="loanTenure">
                        Loan tenure (in months)
                    </label>
                    <input
                        className="border border-green-400 rounded w-64 p-2 mt-1"
                        type="number"
                        id="loanTenure"
                        placeholder="Loan tenure (in months)"
                    />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="reasonForLoan">
                        Reason for loan
                    </label>
                    <input
                        className="border border-green-400 rounded w-64 h-32 p-2 mt-1"
                        type="text"
                        id="reasonForLoan"
                        placeholder="Reason for loan"
                    />
                    
                    </div>
                </div>
                <div className="">
                    
                    <div className="mb-4 mr-10">
                    <label className="block text-gray-700" htmlFor="amountNeeded">
                        How much do you need?
                    </label>
                    <input
                        className="border border-green-400 rounded w-64 p-2 mt-1"
                        type="text"
                        id="amountNeeded"
                        placeholder="How much do you need?"
                    />
                    </div>
                
                
                    <div className="mb-4 mr-10">
                    <label className="block text-gray-700" htmlFor="employmentStatus">
                        Employment status
                    </label>
                    <input
                        className="border border-green-400 rounded w-64 p-2 mt-1"
                        type="text"
                        id="employmentStatus"
                        placeholder="Employment status"
                    />
                    </div>

                <div className="mb-4">
                <label className="block text-gray-700" htmlFor="employmentAddress1">
                    Employment address
                </label>
                <input
                    className="border border-green-400 rounded w-64 p-2 mt-1"
                    type="text"
                    id="employmentAddress1"
                    placeholder="Employment address"
                />
                </div>

                <div className="mb-4">
                <label className="block text-gray-700" htmlFor="employmentAddress2">
                    Employment address
                </label>
                <input
                    className="border border-green-400 rounded w-64 p-2 mt-1"
                    type="text"
                    id="employmentAddress2"
                    placeholder="Employment address"
                />
                </div>
                </div>
      </form>
        <button className="bg-green-900 text-white rounded py-2 px-4 hover:bg-blue-700 mb-12 ml-16 w-20">
          Submit
        </button>
      </div>
    </div>
    )
}