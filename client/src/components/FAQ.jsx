import Collapse from '../common/Collapse'

function FAQ() {
    return (
        <>
            <section className="py-20 bg-gray-bg" id='faqs'>
                <h2 className="font-semibold text-center text-2xl md:text-3xl text-primary-color px-2 md:px-3 ">
                    FAQ
                </h2>
                <div className="section-title-underline bg-primary-color"></div>
                <div className="py-5 px-60">
                    <Collapse title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'} className={"block w-full text-base text-start font-semibold py-4"} borderBottom={'border-b border-b-grey-color-200 border-opacity-70'}>
                        <div className="pb-4 mx-4">
                            Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </Collapse>
                    <Collapse title={'Sed ut perspiciatis unde omnis voluptatem accusantium doloremque laudantium, totam rem'} className={"block w-full text-base text-start font-semibold py-4"} borderBottom={'border-b border-b-grey-color-200 border-opacity-70'}>
                        <div className="pb-4 mx-4">
                            Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.
                        </div>
                    </Collapse>
                    <Collapse title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'} className={"block w-full text-base text-start font-semibold py-4"} borderBottom={'border-b border-b-grey-color-200 border-opacity-70'}>
                        <div className="pb-4 mx-4">
                            Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </Collapse>
                    <Collapse title={'Sed ut perspiciatis unde omnis voluptatem accusantium doloremque laudantium, totam rem'} className={"block w-full text-base text-start font-semibold py-4"} borderBottom={'border-b border-b-grey-color-200 border-opacity-70'}>
                        <div className="pb-4 mx-4">
                            Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.
                        </div>
                    </Collapse>
                </div>
            </section>
        </>
    );
}

export default FAQ