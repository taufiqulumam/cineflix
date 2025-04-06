import Authenticated from "@/Layouts/Authenticated/Index";
import TextInput from "@/Components/TextInput"
import InputLabel from "@/Components/InputLabel"
import InputError from '@/Components/InputError';
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";
import { Head, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === "file" ? event.target.files[0] : event.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        post(route("admin.dashboard.movie.store"));
    }

    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Create Movie" />
            <h1 className="text-xl font-bold mb-4">Insert a New Movie</h1>
            <hr className="mb-4"/>
            <InputError errors={errors} />
            <form onSubmit={submit}>
                <InputLabel value="Name" htmlFor="name"/>
                <TextInput
                    type="text"
                    name="name"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the name of the movie"
                    isError={errors.name}
                />
                <InputLabel value="Category" htmlFor="category" className="mt-4"/>
                <TextInput
                    type="text"
                    name="category"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the category of the movie"
                    isError={errors.category}
                />
                <InputLabel value="Video URL" htmlFor="video_url" className="mt-4"/>
                <TextInput
                    type="url"
                    name="video_url"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the Video URL of the movie"
                    isError={errors.video_url}
                />
                <InputLabel value="Thumbnail" htmlFor="thumbnail" className="mt-4"/>
                <TextInput
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Insert the Thumbnail of the movie"
                    isError={errors.thumbnail}
                />
                <InputLabel value="Rating" htmlFor="rating" className="mt-4"/>
                <TextInput
                    type="number"
                    name="rating"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the Rating of the movie"
                    isError={errors.rating}
                />
                <div className="flex flex-row mt-4 items-center">
                    <Checkbox
                        id="is_featured"
                        name="is_featured"
                        onChange={(e) => setData("is_featured", e.target.checked)}
                    />
                    <InputLabel value="Is Featured" htmlFor="is_featured" className="ml-2 mt-1"/>
                </div>
                <Button type="submit" className="mt-4" processing={processing}>Save</Button>
            </form>
        </Authenticated>
    )
}
