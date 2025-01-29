import React, {useState} from 'react';

const BlogForm = () => {
      const submitRef = React.useRef(null);
	const [formData, setFormData] = useState({
		title: '',
		content: '',
		tags: '',
	});

	const handleChange = (e) => {
		setFormData({...formData, [e.target.name]: e.target.value});
	};
	const token =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbmlAMzIxLmNvbSIsInN1YiI6IjY3OTlkNTc3ZDViNWIxYTRlM2U3ZDBkYiIsImlhdCI6MTczODE2NDI2NywiZXhwIjoxNzM4MTY3ODY3fQ.uiwFv382d5QTrdsmdLCXqZktCrvT057lN6fuVLbK-So';
	const createBlog = async (blog) => {
		try {
			const response = await fetch('http://localhost:3000/blogs', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('token') || token}`,
				},
				body: JSON.stringify(blog),
			});

			if (response.ok) {
				alert('Blog created successfully!');
			} else {
				alert('Failed to create blog!');
			}
		} catch (error) {
			console.error('Failed to create blog:', error);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('Form Submitted:', formData);
            submitRef.current.disabled = true;
            await createBlog(formData);
            submitRef.current.disabled = false;
            setFormData({
                  title: '',
                  content: '',
                  tags: '',
            });
	};

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<h2>Create a Post</h2>

				<label htmlFor="title">Title:</label>
				<input
					type="text"
					id="title"
					name="title"
					value={formData.title}
					onChange={handleChange}
					required
				/>

				<label htmlFor="content">Content:</label>
				<textarea
					id="content"
					name="content"
					value={formData.content}
					onChange={handleChange}
					required
				></textarea>

				<label htmlFor="tags">Tags (comma-separated):</label>
				<input
					type="text"
					id="tags"
					name="tags"
					value={formData.tags}
					onChange={handleChange}
				/>

				<button type="submit" ref={submitRef}>Submit</button>
			</form>

			<style>{`
        .form-container {
          max-width: 400px;
          margin: 50px auto;
          padding: 20px;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        form {
          display: flex;
          flex-direction: column;
        }

        h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }

        label {
          margin: 10px 0 5px;
          font-weight: bold;
        }

        input,
        textarea {
          padding: 10px;
          margin-bottom: 15px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
        }

        textarea {
          height: 100px;
          resize: vertical;
        }

        button {
          background: #007bff;
          color: #fff;
          padding: 10px;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        button:hover {
          background: #0056b3;
        }
      `}</style>
		</div>
	);
};

export default BlogForm;
