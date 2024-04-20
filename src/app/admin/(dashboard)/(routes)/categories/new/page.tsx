import { CategoryForm } from "../[categoryId]/components/category-form";

const NewCategoryPage = () => {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <CategoryForm initialData={null} />
            </div>
        </div>
    );
};

export default NewCategoryPage;
