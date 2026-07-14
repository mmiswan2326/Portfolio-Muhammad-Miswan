from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_JUSTIFY
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, ListFlowable, ListItem

root = Path(__file__).resolve().parent.parent
output_path = root / "public" / "resume.pdf"

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="ResumeTitle", parent=styles["Heading1"], fontName="Helvetica-Bold", fontSize=20, leading=24, textColor=colors.HexColor("#FF6B00"), spaceAfter=4))
styles.add(ParagraphStyle(name="ResumeSubtitle", parent=styles["Heading2"], fontName="Helvetica", fontSize=10.5, leading=13, textColor=colors.HexColor("#2F2F2F"), spaceAfter=8))
styles.add(ParagraphStyle(name="ResumeBody", parent=styles["BodyText"], fontName="Helvetica", fontSize=9.5, leading=11.5, textColor=colors.HexColor("#202020"), spaceAfter=4))
styles.add(ParagraphStyle(name="ResumeSection", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=10.8, leading=12.5, textColor=colors.HexColor("#FF6B00"), spaceAfter=4, borderWidth=0))
styles.add(ParagraphStyle(name="ResumeMeta", parent=styles["BodyText"], fontName="Helvetica", fontSize=8.7, leading=10.5, textColor=colors.HexColor("#555555"), spaceAfter=4))
styles.add(ParagraphStyle(name="ResumeBold", parent=styles["BodyText"], fontName="Helvetica-Bold", fontSize=9.4, leading=11.2, textColor=colors.HexColor("#202020"), spaceAfter=2))

story = []
story.append(Paragraph("Muhammad Miswan", styles["ResumeTitle"]))
story.append(Paragraph("AI Student | AI/ML Developer | Full Stack Developer", styles["ResumeSubtitle"]))
story.append(Paragraph("mmiswan2326@gmail.com  •  GitHub: github.com/mmiswan2326  •  LinkedIn: linkedin.com/in/muhammad-miswan-9479673b1  •  miswan.dev", styles["ResumeMeta"]))
story.append(Spacer(1, 0.12 * inch))

story.append(Paragraph("Professional Summary", styles["ResumeSection"]))
story.append(Paragraph(
    "AI-focused developer building practical machine learning systems and full-stack products that turn ideas into useful user-facing tools. Experienced in Python, React, Next.js, and APIs for delivering end-to-end solutions from model experimentation to deployment.",
    styles["ResumeBody"],
))
story.append(Spacer(1, 0.08 * inch))

story.append(Paragraph("Education", styles["ResumeSection"]))
story.append(Paragraph("B.S. Artificial Intelligence — Dawood University of Engineering and Technology", styles["ResumeBold"]))
story.append(Paragraph("In Progress", styles["ResumeMeta"]))
story.append(Spacer(1, 0.08 * inch))

story.append(Paragraph("Experience", styles["ResumeSection"]))
story.append(Paragraph("Machine Learning Intern — Remote", styles["ResumeBold"]))
story.append(Paragraph("2025 — Present", styles["ResumeMeta"]))
story.append(Paragraph("Building and evaluating classification and prediction models, and shipping the APIs that serve them into production-facing tools using Python, FastAPI, and Scikit-Learn.", styles["ResumeBody"]))
story.append(Paragraph("Full-Stack Development Intern", styles["ResumeBold"]))
story.append(Paragraph("2024", styles["ResumeMeta"]))
story.append(Paragraph("Worked across the stack to build internal tools, focusing on React components, REST API integration, and reliable user interfaces.", styles["ResumeBody"]))
story.append(Spacer(1, 0.08 * inch))

story.append(Paragraph("Selected Projects", styles["ResumeSection"]))
project_items = [
    "AI Smart Study OS — AI-powered study companion for plans, summaries, and quizzes; built with Next.js, LangChain, FastAPI, and PostgreSQL.",
    "QualityVision AI — Computer vision system for automated visual quality inspection using OpenCV, Python, and Scikit-Learn.",
    "Personal Portfolio Website — Designed and built a modern portfolio experience with Next.js, TypeScript, Tailwind CSS, and animated sections.",
]
story.append(ListFlowable([ListItem(Paragraph(item, styles["ResumeBody"]), bulletColor=colors.HexColor("#FF6B00")) for item in project_items], bulletType="bullet", leftIndent=0.18 * inch, bulletFontName="Helvetica-Bold"))
story.append(Spacer(1, 0.08 * inch))

story.append(Paragraph("Technical Skills", styles["ResumeSection"]))
story.append(Paragraph("Programming Languages: Python, C++, JavaScript, SQL", styles["ResumeBody"]))
story.append(Paragraph("AI / ML: Pandas, NumPy, Scikit-Learn, OpenCV, LangChain, LLM Applications", styles["ResumeBody"]))
story.append(Paragraph("Web Development: React, Next.js, HTML, CSS, Tailwind, FastAPI, REST APIs", styles["ResumeBody"]))
story.append(Paragraph("Databases: PostgreSQL, SQLite, MongoDB", styles["ResumeBody"]))
story.append(Paragraph("Tools: Git, GitHub, Docker, Postman, VS Code", styles["ResumeBody"]))
story.append(Spacer(1, 0.08 * inch))

story.append(Paragraph("Certifications", styles["ResumeSection"]))
story.append(Paragraph("Machine Learning Specialization • Python for Data Science • Deep Learning Fundamentals", styles["ResumeBody"]))
story.append(Spacer(1, 0.08 * inch))

story.append(Paragraph("Hackathons & Achievements", styles["ResumeSection"]))
story.append(Paragraph("Saylani Hackathon • University AI Hackathon • Open Source Sprint", styles["ResumeBody"]))
story.append(Spacer(1, 0.08 * inch))

story.append(Paragraph("Soft Skills", styles["ResumeSection"]))
story.append(Paragraph("Problem solving, collaboration, rapid prototyping, communication, ownership, and adaptability", styles["ResumeBody"]))

output_path.parent.mkdir(parents=True, exist_ok=True)
doc = SimpleDocTemplate(str(output_path), pagesize=LETTER, rightMargin=0.6 * inch, leftMargin=0.6 * inch, topMargin=0.5 * inch, bottomMargin=0.5 * inch)
doc.build(story)
print(output_path)
