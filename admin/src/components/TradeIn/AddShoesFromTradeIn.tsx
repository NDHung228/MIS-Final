import ListBox from "../ListBox"
import SwitcherOne from "../SwitcherOne"

function AddShoesFromTradeIn() {
    return (
        <div className="flex flex-col bg-white">
            <div className="bg-white dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark flex items-center justify-between">
                    <h3 className="font-medium text-black dark:text-white">
                        New Shoes
                    </h3>

                    <div>
                        <SwitcherOne toggleId='toggleAddMenuForm' available={false} />
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <form action="#">
                            <div className="p-6.5">
                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Shoes Name <span className="text-meta-1">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Name of lunch"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>

                                <div className="mb-4.5">
                                    <label className="mb-3 block text-black dark:text-white">
                                        Thumbnail <span className="text-meta-1">*</span>
                                    </label>
                                    <input
                                        type="file"
                                        className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                                    />
                                </div>

                                <div className="mb-4.5">
                                    <label className="mb-3 block text-black dark:text-white">
                                        Quantity <span className="text-meta-1">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                                    />
                                </div>

                                <div className="mb-4.5">
                                    <label className="mb-3 block text-black dark:text-white">
                                        Evaluation <span className="text-meta-1">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="p-6.5 ps-0">
                        <div className="mb-4.5">
                            <label className="mb-3 block text-black dark:text-white">
                                Status <span className="text-meta-1">*</span>
                            </label>
                            <ListBox people={[
                                { name: '2Hand' },
                                { name: 'New' },
                            ]} />
                        </div>

                        <div className="mb-4.5">
                            <label className="mb-3 block text-black dark:text-white">
                                Brand <span className="text-meta-1">*</span>
                            </label>
                            <ListBox people={[
                                { name: 'Nike' },
                                { name: 'Adidas' },
                                { name: 'New Balance' },
                                { name: 'Vans' },
                                { name: 'Converse' },
                            ]} />
                        </div>

                        <div className="mb-4.5">
                            <label className="mb-3 block text-black dark:text-white">
                                Size <span className="text-meta-1">*</span>
                            </label>
                            <ListBox people={[
                                { name: 'Eu 38' },
                                { name: 'Eu 39' },
                                { name: 'Eu 40' },
                                { name: 'Eu 40.5' },
                                { name: 'Eu 41' },
                                { name: 'Eu 41.5' },
                                { name: 'Eu 42' },
                                { name: 'Eu 42.5' },
                                { name: 'Eu 43' },
                            ]} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4 pt-0">
                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                    Add New Shoes
                </button>
            </div>
        </div>
    )
}

export default AddShoesFromTradeIn