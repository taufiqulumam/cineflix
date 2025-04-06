import Authenticated from "@/Layouts/Authenticated/Index";
import FlashMessage from "@/Components/FlashMessage";
import Button from "@/Components/Button";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Index({ auth, flashMessage, movies }) {
    const {delete: destroy, put} = useForm();
    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Index Movie" />
            <Link href={route('admin.dashboard.movie.create')}>
                <Button type="button" className="w-60 mb-8">Insert New Movie</Button>
            </Link>
            {flashMessage?.message && (<FlashMessage message={flashMessage.message} />)}

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 text-center">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Thumbnail
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Rating
                            </th>
                            <th scope="col" colSpan={2} className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie) => (
                            <tr key={movie.id} className="bg-white border-b border-gray-200 hover:bg-gray-50 ">
                                <td>
                                    <img src={`/storage/${movie.thumbnail}`} className="w-32 rounded-md" />
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray">
                                    {movie.name}
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray">
                                    {movie.category}
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray">
                                    {movie.rating.toFixed(1)}
                                </td>
                                <td className="px-6 py-4">
                                    <Link href={route('admin.dashboard.movie.edit', movie.id)}>
                                        <Button type="button" variant="warning">Edit</Button>
                                    </Link>
                                </td>
                                <td className="px-6 py-4">
                                    <div>
                                        <Button type="button" variant={movie.deleted_at ? 'primary' : 'danger'} onClick={() => {
                                            if (movie.deleted_at) {
                                                put(route('admin.dashboard.movie.restore', movie.id), {
                                                    onSuccess: () => {
                                                        window.location.reload();
                                                    }
                                                });
                                            } else {
                                                if (confirm('Are you sure you want to delete this movie?')) {
                                                    destroy(route('admin.dashboard.movie.destroy', movie.id), {
                                                        onSuccess: () => {
                                                            window.location.reload();
                                                        }
                                                    });
                                                }
                                            }
                                        }
                                        }>{movie.deleted_at ? 'Restore' : 'Delete'}</Button>
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

        </Authenticated>
    )
}
