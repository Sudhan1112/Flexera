# Power BI Beginner Guide (For `founded_dataset.csv`)

This guide is made for first-time users and matches your project data exactly.

## 1) Where to create the `.pbix` file

Create and save the Power BI file inside your project folder:

- `C:\Users\sudha\OneDrive\Desktop\Flexera\submission\FoundEd_PowerBI_Report.pbix`

This keeps your report and dataset together.

## 2) Install and open Power BI Desktop

1. Install **Power BI Desktop** (Windows app).
2. Open it.
3. Click **Blank report**.

## 3) Import your dataset

1. Click **Home -> Get data -> Text/CSV**.
2. Select:
   `C:\Users\sudha\OneDrive\Desktop\Flexera\submission\founded_dataset.csv`
3. Click **Load**.

Your table will appear on the right (Fields pane).

## 4) Verify data types (important)

1. Click **Transform data** (opens Power Query).
2. Check these column types:
   - Whole Number: `grade`, `year`, `attendanceRate`, `readingScore`, `mathScore`
   - Text: all other columns
3. Click **Close & Apply**.

## 5) Create calculated columns (for admin analysis)

Go to **Data view** -> select table `founded_dataset` -> **New column**.

Paste each formula one by one:

```DAX
ReadingLevelRank =
SWITCH(
    founded_dataset[readingLevel],
    "Letters", 1,
    "Words", 2,
    "Paragraph", 3,
    "Grade 2", 4,
    BLANK()
)
```

```DAX
ExpectedReadingLevelRank =
SWITCH(
    founded_dataset[expectedReadingLevel],
    "Letters", 1,
    "Words", 2,
    "Paragraph", 3,
    "Grade 2", 4,
    BLANK()
)
```

```DAX
MathLevelRank =
SWITCH(
    founded_dataset[mathLevel],
    "Number recognition", 1,
    "Subtraction", 2,
    "Division", 3,
    BLANK()
)
```

```DAX
ExpectedMathLevelRank =
SWITCH(
    founded_dataset[expectedMathLevel],
    "Number recognition", 1,
    "Subtraction", 2,
    "Division", 3,
    BLANK()
)
```

```DAX
BelowExpectedFlag =
IF(
    founded_dataset[ReadingLevelRank] < founded_dataset[ExpectedReadingLevelRank]
        || founded_dataset[MathLevelRank] < founded_dataset[ExpectedMathLevelRank],
    1,
    0
)
```

## 6) Create measures (copy-paste)

Go to **Report view** -> select table -> **New measure**.

```DAX
Students = DISTINCTCOUNT(founded_dataset[studentId])
```

```DAX
Assessment Rows = COUNTROWS(founded_dataset)
```

```DAX
Avg Reading Score = AVERAGE(founded_dataset[readingScore])
```

```DAX
Avg Math Score = AVERAGE(founded_dataset[mathScore])
```

```DAX
Grade 2 Reading % =
DIVIDE(
    CALCULATE(COUNTROWS(founded_dataset), founded_dataset[readingLevel] = "Grade 2"),
    [Assessment Rows],
    0
)
```

```DAX
Division % =
DIVIDE(
    CALCULATE(COUNTROWS(founded_dataset), founded_dataset[mathLevel] = "Division"),
    [Assessment Rows],
    0
)
```

```DAX
Critical Students =
CALCULATE(
    DISTINCTCOUNT(founded_dataset[studentId]),
    founded_dataset[status] = "Critical"
)
```

```DAX
Needs Support Students =
CALCULATE(
    DISTINCTCOUNT(founded_dataset[studentId]),
    founded_dataset[status] = "Needs Support"
)
```

```DAX
Good Students =
CALCULATE(
    DISTINCTCOUNT(founded_dataset[studentId]),
    founded_dataset[status] = "Good"
)
```

```DAX
Below Expected % =
DIVIDE(
    SUM(founded_dataset[BelowExpectedFlag]),
    [Assessment Rows],
    0
)
```

## 7) Build the 3 report pages

## Page 1: Teacher Dashboard

Rename page: `Teacher Dashboard`

Add visuals:
1. **Slicer**: `year`
2. **Slicer**: `className`
3. **Card**: `Students`
4. **Card**: `Avg Reading Score`
5. **Card**: `Avg Math Score`
6. **Card**: `Grade 2 Reading %`
7. **Card**: `Division %`
8. **Line chart**:
   - X-axis: `year`
   - Values: `Avg Reading Score`, `Avg Math Score`
9. **Clustered bar chart**:
   - Y-axis: `className`
   - Values: `Avg Reading Score`, `Avg Math Score`
10. **Donut chart**:
   - Legend: `status`
   - Values: `Assessment Rows`

Format percentage cards:
- Click card -> Format pane -> Data label -> Display units `None`
- Decimal places `1` or `2`

## Page 2: Student Profile

Rename page: `Student Profile`

Add visuals:
1. **Slicer**: `name` (single select ON)
2. **Table**:
   - `studentId`, `name`, `className`, `grade`, `school`, `guardian`, `attendanceRate`
3. **Line chart**:
   - X-axis: `year`
   - Values: `readingScore`, `mathScore`
4. **Table**:
   - `year`, `readingLevel`, `mathLevel`, `expectedReadingLevel`, `expectedMathLevel`, `status`
5. **Card**: `Critical Students` (shows impact for selected filter/student)

## Page 3: Admin Insights

Rename page: `Admin Insights`

Add visuals:
1. **Slicer**: `year`
2. **Matrix**:
   - Rows: `school`
   - Values: `Avg Reading Score`, `Avg Math Score`, `Below Expected %`, `Critical Students`
3. **Clustered column chart**:
   - X-axis: `school`
   - Values: `Below Expected %`
4. **Bar chart**:
   - Y-axis: `school`
   - Values: `Critical Students`
5. **Donut chart**:
   - Legend: `status`
   - Values: `Assessment Rows`

## 8) Make it look clean (quick styling)

1. Use project colors in visual formatting:
   - Blue: `#245B8F`
   - Light blue: `#3274AC`
   - Green: `#228D61`
   - Orange: `#D48A24`
   - Red: `#CC4A4A`
2. Keep same font and spacing across pages.
3. Add page titles using **Text box**.

## 9) Save the PBIX

1. Click **File -> Save As**.
2. Save as:
   `C:\Users\sudha\OneDrive\Desktop\Flexera\submission\FoundEd_PowerBI_Report.pbix`

## 10) Upload `.pbix` to Google Drive and share

1. Upload `FoundEd_PowerBI_Report.pbix` to Drive.
2. Right click file -> **Share**.
3. Set **General access** = **Anyone with the link**.
4. Permission = **Viewer**.
5. Copy link and paste it in the form field:
   **Power BI report (.pbix)**.

---

If anything in Power BI looks different on your screen, follow the same flow by icon names:
Get data -> Load -> Visuals -> Fields -> Save As.
