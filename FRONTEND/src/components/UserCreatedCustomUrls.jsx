import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '../utility/axiosInstance';
import { getUserUrlsFrontend } from "../APIs/usersUrlsFrontend";


const UserCreatedCustomUrls = () => {
    const [copiedId, setCopiedId] = useState(null);
    const queryClient = useQueryClient();

    // Fetch user URLs
    const { data: urls = [], isLoading, error } = useQuery({
        queryKey: ['userUrls'],
        queryFn: getUserUrlsFrontend,
        refetchInterval: 60000,
        staleTime: 30000,
        retry: 1,
    });

    // Delete URL mutation
    const deleteUrlMutation = useMutation({
        mutationFn: async (urlId) => {
            await axiosInstance.delete(`/api/user/urls/${urlId}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['userUrls'] });
        },
        onError: (error) => {
            console.error("Failed to delete URL:", error);
            alert("Failed to delete URL");
        }
    });

    const handleCopy = async (shortUrl, id) => {
        try {
            await navigator.clipboard.writeText(shortUrl);
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 5000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this URL?")) {
            deleteUrlMutation.mutate(id);
        }
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center p-8">
                <div className="text-gray-600">Loading your URLs...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-4 bg-red-50 text-red-700 rounded-lg">
                Failed to fetch URLs
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Shortened URLs</h1>

            {urls.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                    <p>No URLs created yet.</p>
                    <p className="text-sm mt-2">Create your first shortened URL to see it here!</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {urls.map((url) => (
                        <div key={url._id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                                {/* Full URL */}
                                <div className="md:col-span-1">
                                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                        Original URL
                                    </label>
                                    <p className="text-sm text-gray-800 break-all mt-1">
                                        {url.full_url}
                                    </p>
                                </div>

                                {/* Short URL */}
                                <div className="md:col-span-1">
                                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                        Short URL
                                    </label>
                                    <p className="text-sm text-blue-600 break-all mt-1">
                                        {`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/${url.short_url}`}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Clicks: {url.clicks}
                                    </p>
                                </div>

                                {/* Actions */}
                                <div className="md:col-span-1 flex gap-2 justify-end">
                                    <button
                                        onClick={() => handleCopy(
                                            `${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/${url.short_url}`,
                                            url._id
                                        )}
                                        className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${copiedId === url._id
                                            ? "bg-green-100 text-green-700"
                                            : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                                            }`}
                                    >
                                        {copiedId === url._id ? "Copied!" : "Copy"}
                                    </button>

                                    <button
                                        onClick={() => handleDelete(url._id)}
                                        disabled={deleteUrlMutation.isPending}
                                        className="px-3 py-1 text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200 rounded-md transition-colors disabled:opacity-50"
                                    >
                                        {deleteUrlMutation.isPending ? "Deleting..." : "Delete"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UserCreatedCustomUrls;   
