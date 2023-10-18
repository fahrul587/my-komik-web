export const Container = ({ children, className }) => {
  return (
    <div className={"container mx-auto p-2 px-0 sm:px-2 "+ className}>
      {children}
    </div>
  );
};

export const Header = ({ className, children }) => {
  return (
    <div
      id="header"
      className={"font-bold border-b-2 px-2 bg-[#0582ca] font-mono text-white " + className}
    >
        {children}
    </div>
  );
};

export const Content = ({children}) => {
    return (
        <div id="content" className="grid gap-2 grid-cols-2 min-[300px]:grid-cols-3 min-[500px]:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-white dark:bg-[#343a40] w-full p-2 pt-5">
            {children}
        </div>
    )
}

Container.Header = Header
Container.Content = Content
