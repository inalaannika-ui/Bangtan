import streamlit as st
import pandas as pd
import numpy as np

# Title of your app
st.title("My First Streamlit App on Antigravity")

# Some text
st.write("Hello, welcome to my app!")

# Sample data
data = pd.DataFrame(
    np.random.randn(5, 3),
    columns=['A', 'B', 'C']
)

# Show a line chart
st.line_chart(data)
